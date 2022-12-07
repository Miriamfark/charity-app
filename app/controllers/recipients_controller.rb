class RecipientsController < ApplicationController

    def index 
        recipients = Recipient.all 
        render json: recipients
    end

    def show 
        recipient = Recipient.find(params[:id])
        render json: recipient
    end

    def create 
        recipient = Recipient.create!(recipient_params)
        render json: recipient, status: :created
    end

    private 

    def recipient_params 
        params.permit(:name, :category, :fundraising_goal, :logo, :description)
    end

end
