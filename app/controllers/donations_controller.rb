class DonationsController < ApplicationController

    def create 
        recipient = Recipient.find(params[:user_id])

        donation = recipient.donations.create!(donation_params)
        render json: donation, status: :created
    end

    def index 
        recipient = Recipient.find(params[:user_id])
        donations = recipient.donations.all
        render json: donations
    end


    private 

    def donation_params
        params.permit(:amount, :user_id) 
        # ????? how to get the user id?
    end
end
