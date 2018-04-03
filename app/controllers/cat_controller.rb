class CatController < ApplicationController
  def random 
     http_service = Infrastructure::HttpService.new
     response =http_service.get("https://dog.ceo/api/breed/poodle/images/random")
     render json:response.body
  end
end
