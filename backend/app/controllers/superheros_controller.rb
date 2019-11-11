class SuperherosController < ApplicationController
    def index 
        @superheros = Superhero.all 
        render json: @superheros 
    end

    def show 
        @superhero = Superhero.find(params[:id])
        render json: @superhero
    end

    def create 
        @superhero = Superhero.create(superhero_params)
        if @superhero.valid? 
            render json: @superhero, status: 201
        else
            render json: {errors: @toy.errors.full_messages}, status: 401
        end
    end

private 

def superhero_params
    params.permit(:name, :intelligence, :strength, :speed, :durability, :power, :combat, :full_name, :place_of_birth, :height_feet, :weight_lbs, :eye_color, :hair_color, :occupation, :relatives, :image_url)
end

end