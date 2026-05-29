import { render, screen } from "@testing-library/react";
import ProductImageGallery from "../../src/components/ProductImageGallery";

describe("ProductImageGallery", () => {
  it("should render nothing if given an empty array", () => {
    const { container } = render(<ProductImageGallery imageUrls={[]} />);
    expect(container).toBeEmptyDOMElement();
  });

  it("should render list of images ", () => {
    const imageUrls = ["url1", "url2"];
    render(<ProductImageGallery imageUrls={imageUrls} />);
    const images = screen.getAllByRole("img");
    imageUrls.forEach((url, index) => {
      expect(images[index]).toHaveAttribute("src", url);
    });
    expect(images).toHaveLength(2);
  });
});
