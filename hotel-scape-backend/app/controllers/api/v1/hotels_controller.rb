module Api
    module V1
        class HotelsController < ApplicationController
            protect_from_forgery with: :null_session
            def index
                hotels = Hotel.all 
                render json: HotelSerializer.new(hotels, options).serialized_json
            end

            def show
              hotel = Hotel.find_by(slug: params[:slug])

              render json: HotelSerializer.new(hotel, options).serialized_json
            end

            def create
                hotel = Hotel.new(hotel_params)
                if hotel.save
                    render json:  HotelSerializer.new(hotel).serialized_json
                else
                    render json: {error: hotel.errors.messages}, status: 422
              end
            end

              def update
                hotel = Hotel.find_by(slug: params[:slug])
                
                if hotel.update(hotel_params)
                    render json:  HotelSerializer.new(hotel, options).serialized_json
                else
                    render json: {error: hotel.errors.messages}, status: 422
              end
            end

            def destroy
              hotel =  Hotel.find_by(params[:id])
              if hotel.destroy
                  head :no_content 
              else
                  render json: {error: review.errors.messages}, status: 422
            end
          end
private

            def hotel_params
              params.require(:hotel).permit(:name, :image_url)
            end

            def options
              @options ||= { include: %i[reviews]}
            end
        end 
    end 
end
