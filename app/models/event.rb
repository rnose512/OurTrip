class Event < ApplicationRecord
  belongs_to :destination

  validates :title, :category, :start_time, :end_time, :destination_id, presence: true
end
