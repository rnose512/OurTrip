Rails.application.routes.draw do
  resources :trips do
    resources :packing_lists do
      resources :items, only: [:new, :create, :delete]
    end
    resources :expenses
    resources :destinations do
      resources :events, :accomodations, :transportations
    end
  end

  get 'login', to: 'sessions#new'
  post 'login', to: 'sessions#create'
  delete 'logout', to: 'sessions#destroy'

  get 'register', to: 'users#new'
  post 'register', to: 'users#create'

end
