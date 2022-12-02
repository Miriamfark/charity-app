class CreateRecipients < ActiveRecord::Migration[6.1]
  def change
    create_table :recipients do |t|
      t.string :name 
      t.string :category 
      t.integer :fundraising_goal
      t.string :logo
      t.text :description
      t.timestamps
    end
  end
end
