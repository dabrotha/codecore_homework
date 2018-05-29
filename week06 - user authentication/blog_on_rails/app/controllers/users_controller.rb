
class UsersController < ApplicationController

    before_action :find_user, only: [:destroy, :update, :edit]
    before_action :authorize_user!, only: [:destroy, :update, :edit]
    def new
        @user = User.new
    end

    def create
        @user = User.new user_params
        if @user.save
            session[:user_id] = @user.id
            redirect_to posts_path, notice: "Logged In!"
        else
            render :new
        end
    end

    def edit

        @user = User.find(params[:id])
        if session[:user_id]
            redirect_to edit_user_path, notice: "Please update your profile"
        else
            render :new
        # notice: "You are not authorized to edit!"
        end
        
    end



      def update
        user_params = params.require(:id).permit(:first_name, :last_name, :password)
        @user = User.find params[:id]
        if @user.update user_params
          redirect_to post_path, notice: "You are not authorized to edit!"
        else
          render :edit  
        end
      end
    
        private

        def user_params
            params.require(:user).permit(
                :first_name,
                :last_name,
                :email,
                :password,
                :password_confirmation
            )
        end

        def authorize_user!
            # byebug
            unless can?(:manage, @user)
              flash[:alert] = "Access Denied"
              redirect_to posts_path 
              # redirect_to comment_path(@answer.comment)
            end
        end

        def find_user
            @user = User.find(params[:id])
          end
    
end

