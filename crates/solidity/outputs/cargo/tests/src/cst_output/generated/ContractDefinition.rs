// This file is generated automatically by infrastructure scripts. Please don't edit by hand.

use crate::cst_output::runner::run;
use anyhow::Result;

#[test]
fn abstract_contract() -> Result<()> {
    return run("ContractDefinition", "abstract_contract");
}

#[test]
fn empty_contract() -> Result<()> {
    return run("ContractDefinition", "empty_contract");
}

#[test]
fn missing_field_type() -> Result<()> {
    return run("ContractDefinition", "missing_field_type");
}

#[test]
fn unterminated_body() -> Result<()> {
    return run("ContractDefinition", "unterminated_body");
}

#[test]
fn zero_length_input() -> Result<()> {
    return run("ContractDefinition", "zero_length_input");
}
