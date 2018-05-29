class ApplicationController < ActionController::Base



    def authenticate_user!
        redirect_to new_sessions_path, notice: "Please sign in" unless user_signed_in?
    end

    def user_signed_in?
        session[:user_id].present?
    end
    helper_method :user_signed_in?

    def current_user
        @current_user ||= User.find_by_id session[:user_id]
    end
    helper_method :current_user
      
    private

    def authenticate_user!
        unless user_signed_in?
          flash[:alert] = "You must sign in or sign up first!"
          redirect_to new_sessions_path
        end
    end

    

end
