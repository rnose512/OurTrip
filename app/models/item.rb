class Item < ApplicationRecord
  belongs_to :packing_list

  validates :title, presence: true
  validates :packing_list_id, presence: true
end
