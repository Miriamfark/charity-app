class RecipientsController < ApplicationController

    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index 
        recipients = Recipient.all 
        render json: recipients
    end

    def show 
        recipient = find_recipient
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

    def find_recipient 
        recipient = Recipient.find(params[:id])
    end

    def render_not_found_response
        render json: { error: "Recipient not found" }, status: :not_found
      end

end
