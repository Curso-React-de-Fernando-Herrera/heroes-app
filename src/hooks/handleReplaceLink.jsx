
export const handleReplaceLink = ({ path = "/", history }) => {
  const handleReplace = () => {
    history.replace(path)
  }

  return {
    handleReplace
  }
}
