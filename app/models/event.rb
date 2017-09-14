class Event < ApplicationRecord
  belongs_to :destination

  validates :title, :category, :start_time, :end_time, :destination_id, presence: true

  before_save :convert_start_time, :convert_end_time

  def convert_start_time
     self.start_time = self.start_time.strftime("%B %-d, %Y at %l:%M %p")
  end

  def convert_end_time
     self.end_time = self.start_time.strftime("%B %-d, %Y at %l:%M %p")
  end
end
