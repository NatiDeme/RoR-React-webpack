# frozen_string_literal: true

Rails.application.routes.draw do
  root 'root#index'
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      get 'messages' => 'message#index'
    end
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
