class Api::V1::HomeController < ApplicationController

  # GET /home
  def index
    @quote = Quote.order("RANDOM()").limit(1).first
    @posts = Post.latest.limit(3)

    render json: {
      quote: @quote,
      posts: @posts.to_json(include: [:user, :en, :ru])
    }
  end
end
