class PostsController < ApplicationController

    before_action :authenticate_user!, only: [:create, :destroy, :update]
    before_action :find_post, only: [:destroy]
    before_action :authorize_user!, only: [:destroy]



    def new
        @post = Post.new
    end

    def index
        @posts = Post.all
    end

    def show
        @post = Post.find params[:id]
        @comment = Comment.new
        # @comments = @post.comments
    end

      def create
        post_params = params.require(:post).permit(:title, :body) 

        @post = Post.new post_params

        @post.user = current_user
        
        # @post.user = current_user
    # @post.post_id = params[:post_id]
        
        if @post.save
          redirect_to post_path(@post)
        else
          render :new
        end

      end

      def edit
        @post = Post.find params[:id]
      end

      def update
        post_params = params.require(:post).permit(:title, :body)
        @post       = Post.find params[:id]
        if @post.update post_params
          redirect_to post_path(@post)
        else
          render :edit  
        end
      end

      def destroy
        @post = Post.find params[:id]

        
        @post.destroy
        redirect_to posts_path
      end

      private

      def authorize_user!
        unless can?(:manage, @post)
          flash[:alert] = "Access Denied"
          redirect_to posts_path
        end
      end

      def find_post
        @post = Post.find(params[:id])
      end

end
