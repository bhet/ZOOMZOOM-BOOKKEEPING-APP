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
const getExtraCashById = gql`
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
    date
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
const getRegisterReadingById = gql`
  query($id: ID){
    registerReading(id: $id){
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
    id
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
const getCashOutflowById = gql`
  query($id: ID){
    cashOutflow(id: $id){
      id
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
    id
    checks
    cash
    change
    date
  }
}
`

const getRemainingBalanceById = gql`
  query($id: ID){
    remainingBalance(id: $id){
      id
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
const addCashOutflowMutation = gql`
  mutation($vendor_paidout: Float!,
    $credit_card: Float!,
    $lotto_lottery: Float!,
    $bank_deposit: Float!,
    $atm_deposit: Float!,
    $money_order: Float!,
    $money_gram: Float!,
    $individual: Float!){
      addCashOutflow(
        vendor_paidout: $vendor_paidout,
        credit_card: $credit_card,
        lotto_lottery: $lotto_lottery,
        bank_deposit: $bank_deposit,
        atm_deposit: $atm_deposit,
        money_order: $money_order,
        money_gram: $money_gram,
        individual: $individual
      ){
        vendor_paidout
        credit_card
        lotto_lottery
        bank_deposit
        atm_deposit
        money_order
        money_gram
        individual
      }
    }
`

const addRemainingBalanceMutation = gql`
  mutation($checks: Float!, $cash: Float!, $change: Float!){
    addRemainingBalance(checks: $checks, cash: $cash, change: $change){
      checks
      cash
      change
    }
  }
`

const getLastExtraCashRecord = gql`
{
  lastRecordOfExtraCash{
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
const getLastRegisterRecord = gql`
  {
    lastRecordOfRegister{
      id
      sale
      check_cash
      date
    }
  }
`
const getLastRemainingBalance = gql`
  {
    lastRecordOfRemainingBalance{
    id
    checks
    cash
    change
    date
  }
}
`
const getLastCashOutflow = gql`
  {
    lastRecordOfCashOutflow{
    id
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
const updateExtraCash = gql`
mutation(
  $id: ID!
  $yesterday_cash: Float!,
  $cash_from_bank: Float!,
  $cash_from_atm: Float!,
  $orlandi_valuta: Float!,
  $money_order: Float!,
  $money_gram: Float!,
  $lotto_lottery: Float!,
  $collect: Float!
  $individual: Float!){
    updateExtraCash(
      id: $id
      yesterday_cash: $yesterday_cash,
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

const updateCashOutflow = gql`
mutation(
  $id: ID!
  $vendor_paidout: Float!,
  $credit_card: Float!,
  $lotto_lottery: Float!,
  $bank_deposit: Float!,
  $atm_deposit: Float!,
  $money_order: Float!,
  $money_gram: Float!,
  $individual: Float!){
    updateCashOutflow(
      id: $id
      vendor_paidout: $vendor_paidout,
      credit_card: $credit_card,
      lotto_lottery: $lotto_lottery,
      bank_deposit: $bank_deposit,
      atm_deposit: $atm_deposit,
      money_order: $money_order,
      money_gram: $money_gram,
      individual: $individual
    ){
      vendor_paidout
      credit_card
      lotto_lottery
      bank_deposit
      atm_deposit
      money_order
      money_gram
      individual
    }
  }

`

const updateRegisterReading = gql`
mutation($id: ID!, $sale: Float!, $check_cash: Float!){
  updateRegisterReading(id: $id, sale: $sale, check_cash: $check_cash){
    sale
    check_cash
  }
}
`
const updateRemainingBalance = gql`
mutation($id: ID!, $checks: Float!, $cash: Float!, $change: Float!){
  updateRemainingBalance(id: $id, checks: $checks, cash: $cash, change: $change){
    checks
    cash
    change
  }
}
`
const getUsers = gql`
  {
    users{
    id
    fullname
    username
  }
}
`
const addUser = gql`
  mutation($fullname: String!, $username: String!, $email: String!, $password: String!){
    createUsers(fullname: $fullname, username: $username, email: $email,password: $password){
      fullname
      username
    }
  }
`
const getUserById = gql`
  query($id: ID){
    getUser(id: $id){
      id
      fullname
      username
    }
  }
`
const loginMutation = gql`
  mutation($username: String!, $password: String!){
    login(username: $username, password: $password){
      token
    }
  }
`
export {
  getExtraCashes,
  getExtraCashById,
  getRegisterReading,
  getCashOutflow,
  getRemainingBalance,
  addExtraCashMutation,
  addRegisterReadingMutation,
  addCashOutflowMutation,
  addRemainingBalanceMutation,
  getLastExtraCashRecord,
  getLastRegisterRecord,
  getLastRemainingBalance,
  getLastCashOutflow,
  updateExtraCash,
  updateCashOutflow,
  updateRegisterReading,
  updateRemainingBalance,
  getCashOutflowById,
  getRemainingBalanceById,
  getRegisterReadingById,
  getUsers,
  addUser,
  getUserById,
  loginMutation
}
