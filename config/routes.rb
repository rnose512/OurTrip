Rails.application.routes.draw do
  resources :trips do
    resources :expenses
    resources :destinations, only: [:new, :create, :destroy, :index]
  end

  resources :packing_lists, only: [:index] do
    resources :items, only: [:new, :create, :destroy]
  end


  resources :destinations, except: [:new, :create, :destroy, :show, :index] do
    resources :events
    resources :accomodations, except: [:show]
    resources :transportations, except: [:show]
  end

  get 'login', to: 'sessions#new'
  post 'login', to: 'sessions#create'
  delete 'logout', to: 'sessions#destroy'

  get 'register', to: 'users#new'
  post 'register', to: 'users#create'

end
