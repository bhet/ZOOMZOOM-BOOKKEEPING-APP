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
    collect
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
    collect
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

const addExtraCashMutation = gql`
  mutation($yesterday_cash: Float!,
    $cash_from_bank: Float!,
    $cash_from_atm: Float!,
    $orlandi_valuta: Float!,
    $money_order: Float!,
    $money_gram: Float!,
    $lotto_lottery: Float!,
    $collect: Float!
    $individual: Float!){
      addExtraCash(yesterday_cash: $yesterday_cash,
        cash_from_bank: $cash_from_bank,
        cash_from_atm: $cash_from_atm,
        orlandi_valuta: $orlandi_valuta,
        money_order: $money_order,
        money_gram: $money_gram,
        lotto_lottery: $lotto_lottery,
        collect: $collect,
        individual: $individual){
          yesterday_cash
          cash_from_bank
          cash_from_atm
          orlandi_valuta
          money_order
          money_gram
          lotto_lottery
          collect
          individual
        }
    }
`
const addRegisterReadingMutation = gql`
  mutation($sale: Float!, $check_cash: Float!){
    addRegisterReading(sale: $sale, check_cash: $check_cash){
      sale
      check_cash
    }
  }
`


export {
  getExtraCashes,
  getIndividualExtraCash,
  getRegisterReading,
  getCashOutflow,
  getRemainingBalance,
  addExtraCashMutation,
  addRegisterReadingMutation
}
