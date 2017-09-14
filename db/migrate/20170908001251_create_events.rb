class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
    	t.string :title
    	t.string :category
    	t.text :description
    	t.string :start_time
    	t.string :end_time
    	t.integer :destination_id

      t.timestamps
    end
  end
end
