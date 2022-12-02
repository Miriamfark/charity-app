class RecipientSerializer < ActiveModel::Serializer
  attributes :id, :name, :category, :fundraising_goal, :logo, :description
end
