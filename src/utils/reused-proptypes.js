import Proptypes from "prop-types"

export const userProps = Proptypes.shape({
  id: Proptypes.string,
  name: Proptypes.string,
  url: Proptypes.string,
  avatarUrl: Proptypes.string,
  following: Proptypes.object
})