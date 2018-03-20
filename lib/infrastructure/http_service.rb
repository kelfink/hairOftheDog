# frozen_string_literal: true

module Infrastructure
    class HttpService
      def get(url)
        Faraday.get(url)
        # http_connection.get(url)
      rescue StandardError
        return Faraday::Response.new(status: 404)
      end
    end
  end