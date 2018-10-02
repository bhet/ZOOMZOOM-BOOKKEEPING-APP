import { gql } from 'apollo-boost';

const getExtraCashes = gql`
{
  extracashes{
    id
    yesterday_cash
    cash_from_bank
    cash_from_atm
    orlandi_valuta
    money_order
    money_gram
    lotto_lottery
    debt_collection
    individual
    date
  }
}
`
const getIndividualExtraCash = gql`
query($id: ID){
  extraCash(id: $id){
    id
    yesterday_cash
    cash_from_bank
    cash_from_atm
    orlandi_valuta
    money_order
    money_gram
    lotto_lottery
    debt_collection
    individual
  }
}
`

const getRegisterReading = gql`
  {
    registerreadings{
      id
      sale
      check_cash
      date
    }
  }
`

export {
  getExtraCashes,
  getIndividualExtraCash,
  getRegisterReading
}
