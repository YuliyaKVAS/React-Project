import MaterialUIForm from 'material-ui-form'


class MyForm extends React.Component {
  submit = (values, pristineValues) => {
    // get all values and pristineValues on form submission
  }

  customInputHandler = (value, { name }, event) => {
    // the form will update the field as usual, and then call this handler
    // if you want to have complete control of the field, change the "value" prop to "defaultValue"
  }

  customToggleHandler = (checked, { name, value }, event) => {
    // the form will update the field as usual, and then call this handler
    // if you want to have complete control of the field, change the "value" prop to "defaultValue"
  }

  render() {
    return (
      <MaterialUIForm onSubmit={this.submit}>
        <TextField
          label="Name"
          type="text"
          name="name"
          value=""
          data-validators="isRequired,isAlpha"
          onChange={this.customInputHandler}
        />

        <fieldset>
          <legend>Nested</legend>
          <Checkbox
            checked
            name="love"
            value="yes"
            onChange={this.customToggleHandler}
          />
          <span>I love it</span>

          <FormControl required>
            <InputLabel>Age</InputLabel>
            <Select value="" name="age">
              <MenuItem value=""><em>Please select your age ...</em></MenuItem>
              <MenuItem value={10}>Teens</MenuItem>
              <MenuItem value={20}>Twenties</MenuItem>
              <MenuItem value={30}>Thirties</MenuItem>
              <MenuItem value="40+">Fourties +</MenuItem>
            </Select>
            <FormHelperText>Some important helper text</FormHelperText>
          </FormControl>

        </fieldset>
        <Button variant="raised" type="reset">Reset</Button>
        <Button variant="raised" type="submit">Submit</Button>
      </MaterialUIForm>
    )
  }
}

export default MyForm;
