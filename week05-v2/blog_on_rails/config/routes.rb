Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :posts

  # get "/posts/new",to: "posts#new", as: :new_post
  # post "/posts", to: "posts#create", as: :posts
  # get "/posts",to: "posts#index"
  # get "/posts/:id", to: "posts#show", as: :post
  # get "/posts/:id/edit", to: "posts#edit", as: :edit_post
  # patch "/posts/:id",to: "posts#update"
  # delete "/posts/:id", to: "posts#destroy"

  resources :posts do
    resources :comments, only: [:new, :create, :destroy]
  end

end


