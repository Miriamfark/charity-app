class SessionsController < ApplicationController
    skip_before_action :authorize, only: [:create]

    def create 
        # byebug
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { error: {login: "Invalid username or password"}}, status: :unauthorized
        end
    end

    def destroy
        session[:user_id] = nil
        head :no_content
    end
    #login
    #authorize from the application controller 
    #'/me'
end
