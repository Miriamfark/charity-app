class RecipientsController < ApplicationController

    def index 
        recipients = Recipient.all 
        render json: recipients
    end
end
