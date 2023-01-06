class DonationsController < ApplicationController

rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def create   
        user = find_user
        donation = user.donations.create!(donation_params)
        render json: donation, status: :created
    end

    def index 
        user = find_user
        donations = user.donations.all
        render json: donations
    end

    def update
        user = find_user
        donation = user.donations.find(params[:id])
        updated_donation = donation.update!(amount: params[:amount])
        render json: updated_donation, status: :accepted
    end

    def destroy 
        user = find_user
        donation = user.donations.find(params[:id]).destroy
        head :no_content
    end


    private 

    def donation_params
        params.permit(:amount, :recipient_id) 
    end

    def find_user 
        User.find(session[:user_id]) 
    end

    def render_not_found_response
        render json: { error: "User not found" }, status: :not_found
    end

end
