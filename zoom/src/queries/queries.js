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
const getCashOutflow = gql`
{
  cashoutflows{
    vendor_paidout
    credit_card
    lotto_lottery
    bank_deposit
    atm_deposit
    money_order
    money_gram
    individual
    date
  }
}
`
const getRemainingBalance = gql`
{
  remainingbalances{
    checks
    cash
    change
    date
  }
}
`

export {
  getExtraCashes,
  getIndividualExtraCash,
  getRegisterReading,
  getCashOutflow,
  getRemainingBalance
}
