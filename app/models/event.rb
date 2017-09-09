class Event < ApplicationRecord
  belongs to :destination

  validates :title, :category, :start_time, :end_time, :description_id, presence: true
end
