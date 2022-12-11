class DonationsController < ApplicationController

    def create   
        user = User.find(session[:user_id])
        donation = user.donations.create!(donation_params)
        render json: donation, status: :created
    end

    def index 
        user = User.find(session[:user_id])
        donations = user.donations.all
        render json: donations
    end

    def update
        user = User.find(session[:user_id]) 
        donation = user.donations.find(params[:id]).update!(amount: params[:amount])
        render json: donation, status: :accepted
    end

    def destroy 
        user = User.find(session[:user_id]) 
        donation = user.donations.find(params[:id]).destroy
        head :no_content
    end


    private 

    def donation_params
        params.permit(:amount, :recipient_id) 
    end

end
