class RecipientSerializer < ActiveModel::Serializer
  attributes :id, :name, :category, :fundraising_goal, :logo, :description, :sum_donations

  has_many :donations
  has_many :users
end
