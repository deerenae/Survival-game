class SurvivorsController < ApplicationController
    def index
        survivors = Survivor.all 
        render json: survivors
    end
    def show
        survivor = Survivor.find(params[:id])
        render json: survivor 
    end
    def create
        survivor = Survivor.create(
            tool_id: params[:tool_id],
            shelter_id: params[:shelter_id],
        )
        redirect_to `http://localhost:3003/shelter/${id}`
    end 
end
