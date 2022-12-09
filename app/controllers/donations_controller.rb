class DonationsController < ApplicationController

    def create   
        find_recipient
        donation = recipient.donations.create!(donation_params)
        render json: donation, status: :created
    end

    def index 
        find_recipient
        donations = recipient.donations.all
        render json: donations
    end


    private 

    def donation_params
        params.permit(:amount, :user_id) 
    end

    def find_recipient 
        recipient = Recipient.find(params[:recipient_id])
    end
end
