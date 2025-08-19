module Jekyll
  class CategoryPageGenerator < Generator
    safe true
    priority :normal

    def generate(site)
      site.categories.keys.each do |category|
        site.pages << CategoryPage.new(site, site.source, 'categories', category)
      end
    end
  end

  class CategoryPage < Page
    def initialize(site, base, dir, category)
      @site = site
      @base = base
      @dir = dir
      @name = "#{category.downcase.gsub(/\s+/, '-')}.html"

      self.process(@name)
      self.data = {
        'layout' => 'category',
        'title' => category,
        'category' => category
      }
    end
  end
end 