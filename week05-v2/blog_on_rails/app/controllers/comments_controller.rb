
class CommentsController < ApplicationController

def create
    comment_params = params.require(:comment).permit(:body)
    @comment = Comment.new (comment_params)
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


end
