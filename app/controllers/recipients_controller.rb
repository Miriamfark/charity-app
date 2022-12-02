class RecipientsController < ApplicationController
    skip_before_action :authorize, only: [:index]
    def index 
        recipients = Recipient.all 
        render json: recipients
    end
end
