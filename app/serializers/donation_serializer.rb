class DonationSerializer < ActiveModel::Serializer
  attributes :id, :amount, :created_at
  belongs_to :recipient
  belongs_to :user
end
