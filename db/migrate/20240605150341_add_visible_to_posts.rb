class AddVisibleToPosts < ActiveRecord::Migration[7.1]
  def change
    add_column :posts, :visible, :boolean, default: true
  end
end
