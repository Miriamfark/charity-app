class RecipientsController < ApplicationController

    def index 
        recipients = Recipient.all 
        render json: recipients
    end

    def show 
        recipient = Recipient.find(params[:id])
        render json: recipient
    end

end
