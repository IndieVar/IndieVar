class Api::V1::PostsController < ApplicationController
  before_action :set_post, only: %i[ show update destroy update_views ]
  skip_before_action :verify_authenticity_token, raise: false
  before_action :authenticate_devise_api_token!, only: %i[create update destroy]

  # PUT /posts/:id/update_views
  def update_views
    unless @post.update(views: @post.views + 1)
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # GET /posts
  def index
    @posts = Post.order(created_at: :desc)

    render json: @posts, include: [:user, :en, :ru]
  end

  # GET /posts/1
  def show
    render json: @post, include: [:user, :en, :ru]
  end

  # POST /posts
  def create
    @post = Post.new(post_params)

    if @post.save
      render json: @post, include: [:user, :en, :ru], status: :created
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /posts/1
  def update
    if @post.update(post_params)
      render json: @post, include: [:user, :en, :ru]
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
    params.require(:post).permit(
      :cover, :views, :user_id,
      en_attributes: [:title, :desc, :category, :content],
      ru_attributes: [:title, :desc, :category, :content]
    )
  end
end
