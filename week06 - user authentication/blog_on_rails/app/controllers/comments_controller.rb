
class CommentsController < ApplicationController

  before_action :authenticate_user!
  before_action :find_comment, only: [:destroy]
  before_action :authorize_user!, only: [:destroy]

def create
    comment_params = params.require(:comment).permit(:body)
    @comment = Comment.new (comment_params)
    @comment.user = current_user
    @comment.post_id = params[:post_id]

    if @comment.save
        redirect_to post_path(@comment.post)
    else
        render :new
    end
end

def destroy
  @comment = Comment.find params[:id]
  @comment.destroy
  redirect_to posts_path
end

private

def find_comment
  @comment = Comment.find(params[:id])
end


  def authorize_user!
    unless can?(:manage, @comment)
      flash[:alert] = "Access Denied"
      # redirect_to post_path 
      # redirect_to comment_path(@answer.comment)
    end
  end

end
