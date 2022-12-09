class RecipientsController < ApplicationController

    def index 
        recipients = Recipient.all 
        render json: recipients
    end

    def show 
        find_recipient
        render json: recipient
    end

    def create 
        recipient = Recipient.create!(recipient_params)
        render json: recipient, status: :created
    end

    def update 
        find_recipient
        if recipient
            recipient.update(recipient_params)
            render json: recipient, status: :accepted
        else
            render json: { error: "Recipient not found" }, status: :not_found
        end
    end

    def destroy 
        find_recipient
        recipient.destroy
        head :no_content
    end

    private 

    def recipient_params 
        params.permit(:name, :category, :fundraising_goal, :logo, :description)
    end

    def find_recipient 
        recipient = Recipient.find(params[:id])
    end

end
