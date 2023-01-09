class DonationsController < ApplicationController

rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def create  
        # put in error unprocessable entity for missing amount 
        user = find_user
        donation = user.donations.create!(donation_params)
        recipient = Recipient.find_by(id: donation.recipient_id)
        render json: { donation: donation, recipient: recipient }, status: :created
    rescue ActiveRecord::RecordInvalid => e
        render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
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
        render json: donation, status: :accepted
    end

    def destroy 
        user = find_user
        donation = user.donations.find(params[:id]).destroy
        head :no_content
    end

    def high_donations
        donations = Donation.where( amount: (params[:amount]..))
        if donations.length > 0
            recipients = donations.map { |donation| donation.recipient}
            unique_recipients = recipients.uniq
            render json: unique_recipients
        else 
            render json: { error: "Does not exist"}
        end
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
