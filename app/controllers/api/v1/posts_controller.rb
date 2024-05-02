class Api::V1::PostsController < ApplicationController
  before_action :set_post, only: %i[ show update destroy update_views ]
  skip_before_action :verify_authenticity_token, raise: false
  before_action :authenticate_devise_api_token!, only: %i[create update destroy]

  # PUT /posts/:id/update_views
  def update_views
    if @post.update(views: @post.views + 1)
      render json: @post, include: [:user]
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # GET /posts
  def index
    @posts = Post.all

    render json: @posts, include: [:user]
  end

  # GET /posts/1
  def show
    render json: @post, include: [:user]
  end

  # POST /posts
  def create
    @post = Post.new(post_params)

    if @post.save
      render json: @post, include: [:user], status: :created
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /posts/1
  def update
    if @post.update(post_params)
      render json: @post, include: [:user]
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # DELETE /posts/1
  def destroy
    @post.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = Post.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def post_params
      params.require(:post).permit(:title, :desc, :category, :content, :cover, :views, :user_id)
    end
end
