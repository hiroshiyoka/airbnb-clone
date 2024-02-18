import getListingById from "@/app/actions/getListingById";

interface IParams {
  listingId?: string;
}

const ListingPage = async ({ params }: { params: IParams }) => {
  const listing = await getListingById(params);

  return <div></div>;
};

export default ListingPage;
