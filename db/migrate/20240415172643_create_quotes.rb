class CreateQuotes < ActiveRecord::Migration[7.1]
  def change
    create_table :quotes do |t|
      t.string :en, null: false
      t.string :ru, null: false
      t.integer :views, default: 0

      t.timestamps
    end
  end
end
