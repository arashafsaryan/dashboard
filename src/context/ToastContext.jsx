/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
const { showToast } = useToast();

showToast({
    type: "success",
    title: "Settings Saved",
    description: "Your changes have been saved."
});