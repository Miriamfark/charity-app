class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create]

    def create
        user = User.create(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def show
        current_user = User.find(session[:user_id])
        render json: current_user, include: ['recipients', 'recipients.donations', 'donations', 'donations.recipient', 'donations.amount']
    rescue ActiveRecord::RecordNotFound
        render json: { error: "User not found" }, status: :not_found
    end

    def my_donations
        recipient = Recipient.find(params[:id])
        my_donations = recipient.donations.select { |donation| donation.user_id == session[:user_id] }
        render json: my_donations
    end

    private

    def user_params 
        params.permit(:username, :password, :password_confirmation)
    end
end
