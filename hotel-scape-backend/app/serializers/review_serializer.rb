class ReviewSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description, :score, :hotel_id
end
